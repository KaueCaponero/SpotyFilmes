# Usando a imagem base oficial do Node.js
FROM node:18-alpine

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /spotyfilmes-web

# Copiando os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Construindo o aplicativo Next.js
RUN npm run build

# Expondo a porta em que o aplicativo Next.js será executado (geralmente 3000)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]