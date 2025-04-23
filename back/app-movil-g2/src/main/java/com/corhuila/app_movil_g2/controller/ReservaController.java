package com.corhuila.app_movil_g2.controller;

import com.corhuila.app_movil_g2.entity.Reserva;
import com.corhuila.app_movil_g2.iservice.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

    @Autowired
    private IReservaService reservaService;

    // Obtener todas las reservas
    @GetMapping
    public List<Reserva> findAll() {
        return reservaService.findAll();
    }

    // Obtener una reserva por ID
    @GetMapping("/{id}")
    public Optional<Reserva> findById(@PathVariable Long id) {
        return reservaService.findById(id);
    }

    // Crear una nueva reserva
    @PostMapping
    public Reserva save(@RequestBody Reserva reserva) {
        return reservaService.save(reserva);
    }

    // Actualizar una reserva existente
    @PutMapping("/{id}")
    public Reserva update(@RequestBody Reserva reserva, @PathVariable Long id) {
        reserva.setId(id);
        return reservaService.save(reserva);
    }

    // Eliminar una reserva por ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reservaService.delete(id);
    }
}
