package br.com.fiap.SpotyFilmes.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

import br.com.fiap.SpotyFilmes.model.dto.Token;
import br.com.fiap.SpotyFilmes.service.TokenService;


@RestController
public class UserController {
    
    @Autowired
    TokenService tokenService;

   @PostMapping("/login")
    public ResponseEntity<Token> login(){
        return ResponseEntity.ok(tokenService.generateToken("admin@admin"));
    }
}
