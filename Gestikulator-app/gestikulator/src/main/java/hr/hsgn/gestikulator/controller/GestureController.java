package hr.hsgn.gestikulator.controller;

import hr.hsgn.gestikulator.entity.Gesture;
import hr.hsgn.gestikulator.service.GestureService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "gestures")
public class GestureController {
    private final GestureService gestureService;

    public GestureController(GestureService gestureService){ this.gestureService = gestureService; }

    @GetMapping
    public List<String> getGestureNames(){ return gestureService.getGestureNames(); }

    @GetMapping(value="/{gestureText}")
    public Gesture getGesture(@PathVariable String gestureText){ return gestureService.findByText(gestureText); }
}
