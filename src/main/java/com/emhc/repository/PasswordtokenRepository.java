package com.emhc.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.emhc.model.Passwordtoken;
import com.emhc.model.User;

public interface PasswordtokenRepository extends JpaRepository<Passwordtoken, Long> {
	
	Passwordtoken findByUser(User emhcuser);
	
	Passwordtoken findByToken(String token);
	
	void deleteByExpirydateLessThan(Date now);
	
    @Modifying
    @Query("delete from Passwordtoken t where t.expirydate <= ?1")
    void deleteAllExpiredSince(Date now);

}
