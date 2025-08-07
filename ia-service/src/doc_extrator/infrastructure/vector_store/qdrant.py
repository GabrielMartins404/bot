import os
from dotenv import load_dotenv
from langchain_qdrant import QdrantVectorStore
from doc_extrator.infrastructure.providers.modelsIa import models

class manageQdrant:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv("QDRANT_API_KEY")
        self.url_api = os.getenv("QDRANT_URL")
        if not self.api_key or not self.uurl_apirl:
            raise ValueError("The variables of context QDRANT_API_KEY and QDRANT_URL must be defined.")
        
        self.embedding = models.initEmbedding()
    
    def createVectorStore(self, documents) -> None:
        print(f">>> REALIZANDO INDEXAÇÃO DOS CHUNKS NO BANCO VETORIAL")
        QdrantVectorStore.from_documents(
            documents=documents,
            embedding=self.embedding,
            api_key=self.api_key,
            url=self.url_api,
            prefer_grpc=True,
            collection_name="boleto"
        )

        print(">>> INDEXAÇÃO CONCLUÍDA")
    
    def connectVectorStore(self):
        server = QdrantVectorStore.from_existing_collection(
            collection_name="boleto",
            api_key=self.api_key,
            url=self.url_api,
            embedding=self.embedding,
        )
        return server
        