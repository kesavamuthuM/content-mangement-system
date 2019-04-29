package com.eg.all_servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.eg.entities.DatastoreAccessor;
import com.eg.pojo.UserDetailsPojo;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class DataCollector
 */

public class DataCollector extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public DataCollector() {
        super();

    }


	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
		String json = "";
		if (br != null) {
			json = br.readLine();
		}
		ObjectMapper mapper = new ObjectMapper();
		UserDetailsPojo userdetail = mapper.readValue(json, UserDetailsPojo.class);
		DatastoreAccessor accessor = new DatastoreAccessor();
		accessor.storingDataToDatastore(userdetail.getUsername(), userdetail.getEmail(), userdetail.getOrganisation(),
				userdetail.getContactNO(), userdetail.getGender());

	}

}
