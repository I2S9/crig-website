"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument, rgb } from "pdf-lib";

interface PDFSignatureEditorProps {
  pdfUrl: string;
}

export default function PDFSignatureEditor({ pdfUrl }: PDFSignatureEditorProps) {
  const signaturePadRef = useRef<SignatureCanvas>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [approvalText, setApprovalText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);

  const handleClear = () => {
    signaturePadRef.current?.clear();
    setSignature(null);
  };

  const handleEnd = () => {
    if (signaturePadRef.current) {
      const dataURL = signaturePadRef.current.toDataURL();
      setSignature(dataURL);
    }
  };

  const handleGeneratePDF = async () => {
    if (!signature && !approvalText.trim()) {
      alert("Veuillez signer ou saisir 'lu et approuvé'");
      return;
    }

    setIsProcessing(true);
    try {
      // Charger le PDF original
      const response = await fetch(pdfUrl);
      const existingPdfBytes = await response.arrayBuffer();
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Obtenir la première page (page 2 du document, index 1)
      const pages = pdfDoc.getPages();
      const targetPage = pages.length > 1 ? pages[1] : pages[0]; // Page 2 (index 1) ou première page

      const { width, height } = targetPage.getSize();

      // Ajouter le texte "lu et approuvé" si fourni
      if (approvalText.trim()) {
        targetPage.drawText(approvalText, {
          x: 50,
          y: height - 100,
          size: 12,
          color: rgb(0, 0, 0),
        });
      }

      // Ajouter la signature si fournie
      if (signature) {
        try {
          // Convertir la dataURL en bytes
          const base64Data = signature.split(",")[1];
          const pngBytes = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
          
          const signatureImage = await pdfDoc.embedPng(pngBytes);
          const signatureDims = signatureImage.scale(0.25); // Ajuster la taille de la signature

          targetPage.drawImage(signatureImage, {
            x: 50,
            y: height - 150,
            width: signatureDims.width,
            height: signatureDims.height,
          });
        } catch (error) {
          console.error("Erreur lors de l'ajout de la signature:", error);
        }
      }

      // Générer le PDF modifié
      const modifiedPdfBytes = await pdfDoc.save();
      setPdfBytes(modifiedPdfBytes);

      // Créer un blob et télécharger (convertir Uint8Array en ArrayBuffer pour compatibilité TypeScript)
      const arrayBuffer = modifiedPdfBytes.buffer.slice(
        modifiedPdfBytes.byteOffset,
        modifiedPdfBytes.byteOffset + modifiedPdfBytes.byteLength
      );
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "charte-formalabs-signe.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Zone de signature */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Signature manuscrite (optionnel)
        </label>
        <div className="border-2 border-gray-300 rounded-lg bg-white">
          <SignatureCanvas
            ref={signaturePadRef}
            canvasProps={{
              width: 500,
              height: 200,
              className: "w-full h-48 rounded-lg",
            }}
            onEnd={handleEnd}
          />
        </div>
        <div className="mt-2 flex gap-2">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Effacer
          </button>
        </div>
      </div>

      {/* Champ texte */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Texte &quot;lu et approuvé&quot; (optionnel)
        </label>
        <input
          type="text"
          value={approvalText}
          onChange={(e) => setApprovalText(e.target.value)}
          placeholder="Ex: lu et approuvé"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-blue"
        />
        <p className="mt-1 text-xs text-gray-600">
          Vous pouvez saisir votre texte ici ou signer manuellement ci-dessus
        </p>
      </div>

      {/* Bouton de génération */}
      <button
        onClick={handleGeneratePDF}
        disabled={isProcessing || (!signature && !approvalText.trim())}
        className="w-full px-6 py-3 bg-sky-blue text-white rounded-lg hover:bg-[#0077C7] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
      >
        {isProcessing ? "Génération en cours..." : "Générer et télécharger le PDF signé"}
      </button>

      {pdfBytes && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            ✓ PDF généré avec succès ! Le téléchargement devrait commencer automatiquement.
          </p>
        </div>
      )}
    </div>
  );
}

