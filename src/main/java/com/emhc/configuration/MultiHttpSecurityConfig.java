package com.emhc.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.emhc.security.CustomSuccessHandler;
import com.emhc.security.UserAuthenticationProvider;
import com.emhc.security.AuthUserService;


@Configuration
public class MultiHttpSecurityConfig {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
	AuthUserService studentUserService;
	
	@Autowired
	static CustomSuccessHandler customSuccessHandler;

	
	@Configuration
	public static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
		
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			
			http.
				authorizeRequests()
	            .antMatchers("/*").permitAll()
	            .antMatchers("/", "/*", "/client/login/**").permitAll()
	            .antMatchers("/EMH_Flash/*").permitAll()
	        	.antMatchers("/error/**").permitAll()
	        	.antMatchers("/image/**").permitAll()
	        	.antMatchers("/css/**").permitAll()
	        	.antMatchers("/client/registration/**").permitAll()
	        	.antMatchers("/client/**").hasAuthority("CLIENT")
	            .anyRequest().authenticated()
	        .and()//.csrf().disable()
		        .formLogin()
		            .loginPage("/client/login")
		            .successHandler(new CustomSuccessHandler())
		            .failureUrl("/client/login?error=true&login=1")
		            .usernameParameter("username")
		            //.defaultSuccessUrl("/client/home")
		            .permitAll()
	        .and()
	        	.logout()
		            .logoutUrl("/client/logout")
		            .deleteCookies("remember-me")
		            .logoutSuccessUrl("/client/login")
		            .permitAll()
	        .and()
				.rememberMe();
		}
	}

	
	@Configuration
	@Order(1)
	public static class AdminSecurityConfiguration extends WebSecurityConfigurerAdapter {
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			
			http
				.antMatcher("/admin/**")
				.authorizeRequests()
	         	.antMatchers("/admin/login/**").permitAll()
	        	.antMatchers("/admin/**").hasAuthority("ADMIN")
	                .anyRequest().authenticated()
	        .and()
		        .formLogin()
		            .loginPage("/admin/login")
		            .successHandler(new CustomSuccessHandler())
		            .usernameParameter("username")
		            //.defaultSuccessUrl("/admin/home")
		            .permitAll()
	        .and()
		        .logout()
		        	.logoutSuccessUrl("/admin/login")
		            .permitAll();
		}
	}
	@Configuration
	@Order(2)
	public static class ModeratorSecurityConfiguration extends WebSecurityConfigurerAdapter {
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			
			http
				.antMatcher("/moderator/**")
				.authorizeRequests()
	         	.antMatchers("/moderator/login/**").permitAll()
	        	.antMatchers("/moderator/**").hasAuthority("MODERATOR")
	                .anyRequest().authenticated()
	        .and()
		        .formLogin()
		            .loginPage("/moderator/login")
		            .successHandler(new CustomSuccessHandler())
		            .usernameParameter("username")
		            //.defaultSuccessUrl("/moderator/home")
		            .permitAll()
	        .and()
		        .logout()
		        	.logoutSuccessUrl("/moderator/login")
		            .permitAll();
		}
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.userDetailsService(studentUserService);
		auth.authenticationProvider(getAuthProvider());
	}

    @Bean
    public DaoAuthenticationProvider getAuthProvider() {
        final UserAuthenticationProvider authProvider = new UserAuthenticationProvider();
        authProvider.setUserDetailsService(studentUserService);
        authProvider.setPasswordEncoder(bCryptPasswordEncoder);
        return authProvider;
    }
}
