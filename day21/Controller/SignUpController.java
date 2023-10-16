package school.admission.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import school.admission.Entity.SignUpEntity;
import school.admission.Service.SignUpService;

@RestController
@CrossOrigin("*")
public class SignUpController {
	
	@Autowired
	private SignUpService s;
	
	@GetMapping("/alluser")
	public List<SignUpEntity> getSignDetails()
	{
		return s.getSignUpDetails();
	}
	@PostMapping("/user")
	public String createAcc(@RequestBody SignUpEntity se)
	{
		String email= se.getEmail();
		s.create(se);
		if(s.checkEmail(email))
		{
			return "Email already exisits";
		}
		else
		{
			return "Account created";
		}
	}
	@GetMapping("/user")
	public Optional<SignUpEntity> getuserbyid(@RequestParam int sid)
	{
		return s.getuserDetailsById(sid);
	}
	@PutMapping("/user")
	public String createAcc(@RequestBody SignUpEntity se, @RequestParam int sid)
	{
		se.setSid(sid);
		s.update(se);
		return "Account Updated";
	}
	@DeleteMapping("/user")
	public String delAcc(@RequestParam int sid)
	{
		s.delete(sid);
		return "Deleted!";
	}
}
