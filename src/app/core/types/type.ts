export interface Promocao {
    id: number
    destino: string
    imagem: string
    preco: number
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface Depoimento {
    id: number;
    texto: string;
    autor: string;
    avatar: string;
}

export interface Login {
    email: string;
    senha: string;
}

export interface AuthResponse {
  access_token: string;
}

export interface Usuario {
  nome:       string;
  nascimento: Date;
  cpf:        string;
  telefone:   string;
  email:      string;
  senha:      string;
  genero:     string;
  cidade:     string;
  estado:     UnidadeFederativa;
}

