from abc import ABC, abstractmethod

class ReaderPdf(ABC):
    @abstractmethod
    def readText(self, pathArchive: str) -> str:
        pass

class manageGraph(ABC):
    @abstractmethod
    def executeExtract(self, archivePdf: str, readPdf: ReaderPdf):
        pass