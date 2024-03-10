package br.com.fiap.SpotyFilmes.controllers;

import lombok.extern.log4j.Log4j2;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.fiap.SpotyFilmes.model.Usuario;
import br.com.fiap.SpotyFilmes.model.dto.Credenciais;
import br.com.fiap.SpotyFilmes.model.dto.Token;
import br.com.fiap.SpotyFilmes.model.dto.UsuarioResponse;
import br.com.fiap.SpotyFilmes.repository.UsuarioRepository;
import br.com.fiap.SpotyFilmes.service.TokenService;
import jakarta.validation.Valid;

@RestController
@Log4j2
public class UsuarioController {
    
    @Autowired
    TokenService tokenService;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<Token> login(@RequestBody Credenciais credenciais){
        log.info("Recebendo Requisições de Login");
        log.info("Validando Credenciais: " + credenciais);
        authManager.authenticate(credenciais.toAuthentication());
        return ResponseEntity.ok(tokenService.generateToken(credenciais.email()));
    }

    @PostMapping("/usuario")
    public ResponseEntity<UsuarioResponse> createUsuario(@RequestBody @Valid Usuario novo_usuario){
        log.info("Cadastrando Usuario: " + novo_usuario);
        novo_usuario.setSenha(passwordEncoder.encode(novo_usuario.getSenha()));
        usuarioRepository.save(novo_usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(UsuarioResponse.fromUsuario(novo_usuario));
    }
}