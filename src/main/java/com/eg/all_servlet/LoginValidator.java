package com.eg.all_servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.eg.pojo.UserDetailsPojo;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class LoginValidator
 */
@WebServlet("/login")
public class LoginValidator extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		final String username = "kesav.muthuraj@anywhere.co";
		final String password = "1aAcvbds.";

		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
		String json = "";
		if (br != null) {
			json = br.readLine();
			System.out.println(json);
		}

		ObjectMapper mapper = new ObjectMapper();

		UserDetailsPojo udp = mapper.readValue(json, UserDetailsPojo.class);
		System.out.println(udp.getPassword() + udp.getUsername());

		String passedUsername = request.getParameter("username");
		String passedPassword = request.getParameter("password");
		System.out.println(passedPassword + passedUsername);
		response.setContentType("text/plain");
		if (username.equals(passedUsername) && password.equals(passedPassword))

			response.getWriter().print("allow");

		else
			response.getWriter().print("don't allow");

	}

	/**
	 * x
	 * 
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
