package com.corhuila.app_movil_g2.service;

import com.corhuila.app_movil_g2.entity.Reserva;
import com.corhuila.app_movil_g2.iservice.IReservaService;
import com.corhuila.app_movil_g2.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService implements IReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Override
    public List<Reserva> findAll() {
        return reservaRepository.findAll();
    }

    @Override
    public Optional<Reserva> findById(Long id) {
        return reservaRepository.findById(id);
    }

    @Override
    public Reserva save(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @Override
    public void delete(Long id) {
        reservaRepository.deleteById(id);
    }
}
