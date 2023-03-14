package hr.hsgn.gestikulator.service;

import hr.hsgn.gestikulator.entity.Gesture;

import java.util.List;

public interface GestureService {

    Gesture findById(Long id);
    Gesture findByText(String name);
    List<String> getGestureNames();
}
