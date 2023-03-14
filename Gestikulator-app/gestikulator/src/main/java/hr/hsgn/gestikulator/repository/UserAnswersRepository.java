package hr.hsgn.gestikulator.repository;

import hr.hsgn.gestikulator.entity.UserAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAnswersRepository extends JpaRepository<UserAnswer, Long> {

}
