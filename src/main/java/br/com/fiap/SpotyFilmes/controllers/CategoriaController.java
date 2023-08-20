package br.com.fiap.SpotyFilmes.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.SpotyFilmes.model.Categoria;

@RestController
public class CategoriaController {
    
    @GetMapping("/categorias")
    public Categoria listCategorias() {
        return new Categoria("Romance", "www.image.com/love", "Filmes de Romance", 3);
    }

}
