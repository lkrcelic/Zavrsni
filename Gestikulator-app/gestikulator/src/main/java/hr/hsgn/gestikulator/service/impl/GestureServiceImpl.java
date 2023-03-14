package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.entity.Gesture;
import hr.hsgn.gestikulator.repository.GestureRepository;
import hr.hsgn.gestikulator.service.GestureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GestureServiceImpl implements GestureService {

    private final GestureRepository gestureRepository;

    @Autowired
    public GestureServiceImpl(GestureRepository gestureRepository) {
        this.gestureRepository = gestureRepository;
    }

    @Override
    public Gesture findById(Long id) {
        Optional<Gesture> gesture = gestureRepository.findById(id);

        return gesture.orElse(null);
    }

    @Override
    public Gesture findByText(String text) {
        return gestureRepository.findByText(text);
    }

    @Override
    public List<String> getGestureNames() {
        return gestureRepository.getNames();
    }
}
