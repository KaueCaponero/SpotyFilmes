package br.com.fiap.SpotyFilmes.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;

import br.com.fiap.SpotyFilmes.model.Categoria;

@RestController
public class CategoriaController {
    
    Logger log = LoggerFactory.getLogger(getClass());

    List<Categoria> listaCategorias = new ArrayList<Categoria>();

    @GetMapping("/categorias")
    public List<Categoria> listAll() {
       return listaCategorias;
    }

    @GetMapping("/categorias/{id}")
    public ResponseEntity<Categoria> readCategoria(@PathVariable Long id) {
        log.info("Exibindo a Categoria de Id: " + id);
        var categoria_buscada = listaCategorias
                                    .stream()
                                    .filter((categoria) -> categoria.getId().equals(id))
                                    .findFirst();
        if (categoria_buscada.isEmpty()) 
            return ResponseEntity.notFound().build();
        
        return ResponseEntity.ok(categoria_buscada.get());
    }


    @PostMapping("/categorias")
    public ResponseEntity<Categoria> createCategoria(@RequestBody Categoria nova_categoria) {
        nova_categoria.setId(listaCategorias.size() + 1L);
        log.info("Cadastrando Categoria: " + nova_categoria);
        listaCategorias.add(nova_categoria);
        return ResponseEntity.status(HttpStatus.CREATED).body(nova_categoria);
    }


    @PutMapping("/categorias/{id}")
    public ResponseEntity<Categoria> updateCategoria(@PathVariable Long id, @RequestBody Categoria categoria_atualizar){
        log.info("Atualizando a Categoria de ID: " + id);
        var categoria_buscada = listaCategorias
                                    .stream()
                                    .filter((categoria) -> categoria.getId().equals(id))
                                    .findFirst();

        if (categoria_buscada.isEmpty())
            return ResponseEntity.notFound().build();

        listaCategorias.remove(categoria_buscada.get());
        categoria_atualizar.setId(id);
        listaCategorias.add(categoria_atualizar);
        return ResponseEntity.ok(categoria_atualizar); 
    }


    @DeleteMapping("/categorias/{id}")
    public ResponseEntity<Categoria> deleteCategoria(@PathVariable Long id) {
        log.info("Deletando a Categoria de ID: " + id);
        var categoria_buscada = listaCategorias
                                            .stream()
                                            .filter((categoria) -> categoria.getId().equals(id))
                                            .findFirst();
        if (categoria_buscada.isEmpty())
            return ResponseEntity.notFound().build();

        listaCategorias.remove(categoria_buscada.get());
        return ResponseEntity.noContent().build();        
    }


}
