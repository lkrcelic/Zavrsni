package hr.hsgn.gestikulator.service;

import hr.hsgn.gestikulator.controller.dto.SubLevelDTO;
import hr.hsgn.gestikulator.entity.SubLevel;

import java.util.List;

public interface SubLevelService {

    List<SubLevelDTO> getSubLevelsByLevelId(Long id);

}
