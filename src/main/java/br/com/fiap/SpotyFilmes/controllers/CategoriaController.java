package br.com.fiap.SpotyFilmes.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
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

import java.util.List;
import java.util.ArrayList;

import br.com.fiap.SpotyFilmes.model.Categoria;
import br.com.fiap.SpotyFilmes.repository.CategoriaRepository;

@RestController
public class CategoriaController {
    
    Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    CategoriaRepository categoriaRepository;

    List<Categoria> listaCategorias = new ArrayList<Categoria>();

    @GetMapping("/categorias")
    public List<Categoria> listAll() {
       return categoriaRepository.findAll();
    }

    @GetMapping("/categorias/{id}")
    public ResponseEntity<Categoria> readCategoria(@PathVariable Long id) {
        log.info("Exibindo a Categoria de ID: " + id);
        return ResponseEntity.ok(getCategoriaById(id));
    }

    @PostMapping("/categorias")
    public ResponseEntity<Categoria> createCategoria(@RequestBody Categoria nova_categoria) {
        log.info("Cadastrando Categoria: " + nova_categoria);
        categoriaRepository.save(nova_categoria);
        return ResponseEntity.status(HttpStatus.CREATED).body(nova_categoria);
    }

    @PutMapping("/categorias/{id}")
    public ResponseEntity<Categoria> updateCategoria(@PathVariable Long id, @RequestBody Categoria categoria_atualizar){
        log.info("Atualizando a Categoria de ID: " + id);
        getCategoriaById(id);
        categoria_atualizar.setId(id);
        categoriaRepository.save(categoria_atualizar);
        return ResponseEntity.ok(categoria_atualizar);
    }

    @DeleteMapping("/categorias/{id}")
    public ResponseEntity<Categoria> deleteCategoria(@PathVariable Long id) {
        log.info("Deletando a Categoria de ID: " + id);
        categoriaRepository.delete(getCategoriaById(id));
        return ResponseEntity.noContent().build();
    }

    private Categoria getCategoriaById(Long id){
        return categoriaRepository.findById(id).orElseThrow(() -> {return new RuntimeException();});  
    }
}
