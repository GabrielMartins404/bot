from langchain.chat_models import init_chat_model
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv

class models:
    @staticmethod
    def initModel():
        load_dotenv()
        model = init_chat_model("gemini-2.0-flash", model_provider="google_genai")
        return model
    
    @staticmethod
    def initEmbedding():
        embendding = HuggingFaceEmbeddings(
            model_name="WhereIsAI/UAE-Large-V1"
        )
        return embendding