package br.com.fiap.SpotyFilmes.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;


import br.com.fiap.SpotyFilmes.model.Filme;

@RestController
public class FilmeController {
    
    Logger log = LoggerFactory.getLogger(getClass());
    List<Filme> listaFilmes = new ArrayList<Filme>();

    @GetMapping("/filmes")
    public List<Filme> listAll() {
       return listaFilmes;
    }

    @GetMapping("/filmes/{id}")
    public ResponseEntity<Filme> readFilme(@PathVariable Long id) {
        log.info("Exibindo o Filme de ID: " + id);
        var filme_buscado = listaFilmes
                            .stream()
                            .filter((filme) -> filme.getId().equals(id))
                            .findFirst();
        if (filme_buscado.isEmpty()) 
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(filme_buscado.get());
    }

    @PostMapping("/filmes")
    public ResponseEntity<Filme> createFilme(@RequestBody Filme novo_filme) {
        novo_filme.setId(listaFilmes.size() + 1L);
        log.info("Cadastrando Filme: " + novo_filme);
        listaFilmes.add(novo_filme);
        return ResponseEntity.status(HttpStatus.CREATED).body(novo_filme);
    }

    @PutMapping("/filmes/{id}")
    public ResponseEntity<Filme> updateFilme(@PathVariable Long id, @RequestBody Filme filme_atualizar){
        log.info("Atualizando o Filme de ID: " + id);
        var filme_buscado = listaFilmes
                            .stream()
                            .filter((filme) -> filme.getId().equals(id))
                            .findFirst();
        if (filme_buscado.isEmpty()) 
            return ResponseEntity.notFound().build();
        listaFilmes.remove(filme_buscado.get());
        filme_atualizar.setId(id);
        listaFilmes.add(filme_atualizar);
        return ResponseEntity.ok(filme_atualizar); 
    }

    @DeleteMapping("/filmes/{id}")
    public ResponseEntity<Filme> deleteFilme(@PathVariable Long id) {
        log.info("Deletando o Filme de ID: " + id);
        var filme_buscado = listaFilmes
                            .stream()
                            .filter((filme) -> filme.getId().equals(id))
                            .findFirst();
        if (filme_buscado.isEmpty()) 
            return ResponseEntity.notFound().build();
        listaFilmes.remove(filme_buscado.get());
        return ResponseEntity.noContent().build();        
    }
}
