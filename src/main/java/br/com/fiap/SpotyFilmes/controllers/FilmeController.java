package br.com.fiap.SpotyFilmes.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.SpotyFilmes.model.Categoria;
import br.com.fiap.SpotyFilmes.model.Filme;;

@RestController
public class FilmeController {
    
    @GetMapping("/filmes")
    public Filme listFilmes() {
        Categoria categoria_filme = new Categoria(1L, "Romance", "www.image.com/love", "Filmes de Romance", 3L);
        return new Filme(1L, "Besouro Azul", "www.image.com/besouro-azul", "Filme da DC com a Bruna Marquezine", 4L, categoria_filme);
    }

}
