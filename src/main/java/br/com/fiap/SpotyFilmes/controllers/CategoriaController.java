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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import br.com.fiap.SpotyFilmes.model.Categoria;
import br.com.fiap.SpotyFilmes.model.dto.TotalCategoria;
import br.com.fiap.SpotyFilmes.repository.CategoriaRepository;
import br.com.fiap.SpotyFilmes.service.CategoriaService;

@RestController
@RequestMapping("categorias")
@Slf4j
public class CategoriaController {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    CategoriaService categoriaService;

    @GetMapping
    public List<Categoria> listAll() {
        log.info("Buscando Todas as Categorias");
        return categoriaRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Categoria> readCategoria(@PathVariable Long id) {
        log.info("Exibindo a Categoria de ID: " + id);
        return ResponseEntity.ok(getCategoriaById(id));
    }

    @PostMapping
    public ResponseEntity<Categoria> createCategoria(@RequestBody @Valid Categoria nova_categoria) {
        log.info("Cadastrando Categoria: " + nova_categoria);
        categoriaRepository.save(nova_categoria);
        return ResponseEntity.status(HttpStatus.CREATED).body(nova_categoria);
    }

    @PutMapping("{id}")
    public ResponseEntity<Categoria> updateCategoria(@PathVariable @Valid Long id,
            @RequestBody Categoria categoria_atualizar) {
        log.info("Atualizando a Categoria de ID: " + id);
        getCategoriaById(id);
        categoria_atualizar.setId(id);
        categoriaRepository.save(categoria_atualizar);
        return ResponseEntity.ok(categoria_atualizar);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Categoria> deleteCategoria(@PathVariable Long id) {
        log.info("Deletando a Categoria de ID: " + id);
        categoriaRepository.delete(getCategoriaById(id));
        return ResponseEntity.noContent().build();
    }

    @GetMapping("quantidades")
    public ResponseEntity<List<TotalCategoria>> totalPorCategoria() {
        var lista = categoriaService.getTotalPorCategoria();
        return ResponseEntity.ok(lista);
    }

    private Categoria getCategoriaById(Long id) {
        return categoriaRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada com o ID: " + id));
    }
}
