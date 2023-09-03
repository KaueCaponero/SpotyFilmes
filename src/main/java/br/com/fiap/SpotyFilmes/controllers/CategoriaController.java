package br.com.fiap.SpotyFilmes.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
        var categoria_buscada = categoriaRepository.findById(id);
        if (categoria_buscada.isEmpty()) 
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(categoria_buscada.get());
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
        var categoria_buscada = categoriaRepository.findById(id);
        if (categoria_buscada.isEmpty())
            return ResponseEntity.notFound().build();
        
        categoria_buscada.get().setNome(categoria_atualizar.getNome());
        categoria_buscada.get().setUrl_imagem(categoria_atualizar.getUrl_imagem());
        categoria_buscada.get().setDescricao(categoria_atualizar.getDescricao());
        categoria_buscada.get().setClassificacao(categoria_atualizar.getClassificacao());
        categoriaRepository.save(categoria_buscada.get());
        return ResponseEntity.ok(categoria_buscada.get()); 
    }

    @DeleteMapping("/categorias/{id}")
    public ResponseEntity<Categoria> deleteCategoria(@PathVariable Long id) {
        log.info("Deletando a Categoria de ID: " + id);
        var categoria_buscada = categoriaRepository.findById(id);
        if (categoria_buscada.isEmpty())
            return ResponseEntity.notFound().build();
        categoriaRepository.deleteById(id);
        return ResponseEntity.noContent().build();        
    }
}
