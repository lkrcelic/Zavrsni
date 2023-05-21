package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.controller.dto.SubLevelDTO;
import hr.hsgn.gestikulator.repository.SubLevelRepository;
import hr.hsgn.gestikulator.service.SubLevelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubLevelServiceImpl implements SubLevelService {

    private final SubLevelRepository subLevelRepository;

    private final ModelMapper mapper;

    @Autowired
    public SubLevelServiceImpl(SubLevelRepository subLevelRepository, ModelMapper mapper) {
        this.subLevelRepository = subLevelRepository;
        this.mapper = mapper;
    }

    @Override
    public List<SubLevelDTO> getSubLevelsByLevelId(Long id) {
        return subLevelRepository.findByLevelId(id).stream()
            .map(subLevel -> mapper.map(subLevel, SubLevelDTO.class))
            .collect(Collectors.toList());
    }

}
