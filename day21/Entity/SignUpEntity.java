package school.admission.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_data")
public class SignUpEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	private String firstname;
	private String lastname;
	private String email;
	private String pwd;
	private String confirmpwd;
	private String phone;
	private int age;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getConfirmpwd() {
		return confirmpwd;
	}
	public void setConfirmpwd(String confirmpwd) {
		this.confirmpwd = confirmpwd;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public SignUpEntity(int sid, String firstname, String lastname, String email, String pwd, String confirmpwd,
			String phone, int age) {
		super();
		this.sid = sid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.pwd = pwd;
		this.confirmpwd = confirmpwd;
		this.phone = phone;
		this.age = age;
	}
	public SignUpEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "SignUpEntity [sid=" + sid + ", firstname=" + firstname + ", lastname=" + lastname + ", Email=" + email
				+ ", pwd=" + pwd + ", confirmpwd=" + confirmpwd + ", phone=" + phone + ", age=" + age + "]";
	}
	
	
	
}
