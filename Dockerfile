# Usando a imagem base do openjdk:17-alpine
FROM openjdk:17-alpine

# Atualizando o repositório do Alpine
RUN apk update

# Criando um novo usuário chamado "adm-spotyfilmes"
RUN adduser -D adm-spotyfilmes

# Definindo o usuário padrão como "adm-spotyfilmes"
USER adm-spotyfilmes

# Definindo o diretório padrão como /app
WORKDIR /spotyfilmes

# Copiando o arquivo JAR gerado pelo Maven para o diretório padrão
COPY target/SpotyFilmes-0.0.1-SNAPSHOT.jar /spotyfilmes/spotyfilmes.jar

# Expondo a porta 8080
EXPOSE 8080

# Executando o aplicativo Spring Boot
CMD ["java", "-jar", "spotyfilmes.jar"]