from doc_extrator.infrastructure.providers.modelsIa import models
from pydantic import BaseModel, Field
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser, StrOutputParser
from prompts import index as prompt

class ClassfyInput(BaseModel):
    option: int = Field(description="Defina 1 se a pergunta do usuário solicitar informações de algum boleto.\
                        Defina 2  se for saudações ou temas que não são referentes ao boleto")
    
parser_classfy = PydanticOutputParser(pydantic_object=ClassfyInput)

route_prompt_template = ChatPromptTemplate([("system", prompt.sys_prompt_rota),
                                            ("user", "{pergunta_user}")],                                           
                                           ).partial(format_instructions=parser_classfy.get_format_instructions())

prompt_template = ChatPromptTemplate.from_messages([
    ("system", prompt.sys_prompt_rota),
    ("user", "{pergunta_user}")
])
chain_classfy = route_prompt_template | models.initModel() | StrOutputParser

resultado = chain_classfy.invoke({"user":"Qual o meu boleto?"})
print(resultado)