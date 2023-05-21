package hr.hsgn.gestikulator.controller;

import hr.hsgn.gestikulator.controller.dto.SubLevelDTO;
import hr.hsgn.gestikulator.service.SubLevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("sub_levels")
public class SubLevelController {

    private final SubLevelService subLevelService;

    @Autowired
    public SubLevelController(SubLevelService subLevelService) {
        this.subLevelService = subLevelService;
    }

    @GetMapping("/level/{id}")
    public ResponseEntity<List<SubLevelDTO>> getSubLevelsByLevelId(@PathVariable Long id) {
        List<SubLevelDTO> subLevels = subLevelService.getSubLevelsByLevelId(id);

        if (subLevels != null) {
            return ResponseEntity.ok(subLevels);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
