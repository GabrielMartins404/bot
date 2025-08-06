from pydantic import BaseModel, Field
from typing import List

class ClientPayment(BaseModel):
    name: str = Field(description="O nome do pagador extraido do documento. Se atente para o nome completo")
    road: str = Field(description="Rua do endereço do pagador")
    cep: str = Field(description="Numeros de cep do pagador")

class Payment(BaseModel):
    value: float = Field(description="O valor do documento a ser pago")
    numberDocument: int = Field(description="Numero do documento")
    dateIssue: str = Field(description="Data de emissão do documento, no formato aaaa-mm-dd")
    dataDue: str = Field(description="Data de vencimento do documento, no formato aaaa-mm-dd")
    