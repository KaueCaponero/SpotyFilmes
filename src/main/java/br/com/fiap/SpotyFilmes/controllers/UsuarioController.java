package br.com.fiap.SpotyFilmes.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.fiap.SpotyFilmes.model.Usuario;
import br.com.fiap.SpotyFilmes.model.dto.Token;
import br.com.fiap.SpotyFilmes.repository.UsuarioRepository;
import br.com.fiap.SpotyFilmes.service.TokenService;
import jakarta.validation.Valid;


@RestController
public class UsuarioController {
    
    @Autowired
    TokenService tokenService;

    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity<Token> login(){
        return ResponseEntity.ok(tokenService.generateToken("admin@admin"));
    }

    @PostMapping("/usuario")
    public String createUsuario(@RequestBody @Valid Usuario novo_usuario){
        usuarioRepository.save(novo_usuario);
        return "ok";
    }
}
