package br.com.fiap.SpotyFilmes.controllers;

import java.util.List;

import jakarta.validation.Valid;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.fiap.SpotyFilmes.model.Categoria;
import br.com.fiap.SpotyFilmes.model.Filme;
import br.com.fiap.SpotyFilmes.repository.CategoriaRepository;
import br.com.fiap.SpotyFilmes.repository.FilmeRepository;

@RestController
@Slf4j
public class FilmeController {

    @Autowired
    FilmeRepository filmeRepository;

    @Autowired
    CategoriaRepository categoriaRepository;

    @GetMapping("/filmes")
    public List<Filme> listAll() {
        return filmeRepository.findAll();
    }

    @GetMapping("/filmes/{id}")
    public ResponseEntity<Filme> readFilme(@PathVariable Long id) {
        log.info("Exibindo o Filme de ID: " + id);
        return ResponseEntity.ok(getFilmeById(id));
    }

    @PostMapping("/filmes")
    public ResponseEntity<Filme> createFilme(@RequestBody @Valid Filme novo_filme) {
        log.info("Cadastrando Filme: " + novo_filme);
        Long id_categoria = novo_filme.getCategoria().getId();
        Categoria categoria = categoriaRepository.findById(id_categoria)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada com o ID: " + id_categoria));
        novo_filme.setCategoria(categoria);
        filmeRepository.save(novo_filme);
        return ResponseEntity.status(HttpStatus.CREATED).body(novo_filme);
    }

    @PutMapping("/filmes/{id}")
    public ResponseEntity<Filme> updateFilme(@PathVariable @Valid Long id, @RequestBody Filme filme_atualizar){
        log.info("Atualizando o Filme de ID: " + id);
        getFilmeById(id);
        filme_atualizar.setId(id);
        Long novaCategoriaId = filme_atualizar.getCategoria().getId();
        Categoria novaCategoria = categoriaRepository.findById(novaCategoriaId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada com o ID: " + novaCategoriaId));
        filme_atualizar.setCategoria(novaCategoria);
        filmeRepository.save(filme_atualizar);
        return ResponseEntity.ok(filme_atualizar);
    }

    @DeleteMapping("/filmes/{id}")
    public ResponseEntity<Filme> deleteFilme(@PathVariable Long id) {
        log.info("Deletando o Filme de ID: " + id);
        filmeRepository.delete(getFilmeById(id));
        return ResponseEntity.noContent().build();       
    }

    private Filme getFilmeById(Long id){
        return filmeRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Filme não encontrado com o ID: " + id));
    }
}
