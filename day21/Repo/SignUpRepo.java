package school.admission.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import school.admission.Entity.SignUpEntity;

@Repository
public interface SignUpRepo extends JpaRepository<SignUpEntity, Integer> {

	
	List<SignUpEntity> findByEmail(String email);
	
}
