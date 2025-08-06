import fitz  # PyMuPDF
from doc_extrator.domain.ports import ReaderPdf

class ReaderPyMuPdf(ReaderPdf):
    def ReaderPdf(self, pathArchive: str) -> str:
        fullText = ""
        try:
            with fitz.open(pathArchive) as doc:
                for page in doc:
                    fullText += page.get_text()

                return fullText
        except Exception as e:
            print(f"Erro ao ler o arquivo {pathArchive}: {e}")
            return ""
        