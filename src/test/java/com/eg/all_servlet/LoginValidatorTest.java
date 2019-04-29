package com.eg.all_servlet;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertNotEquals;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class LoginValidatorTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		LoginValidator lv = new LoginValidator();
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Test
	public void test() {
		int[] first = { 1, 2, 3 };
		int[] second = first;
		assertArrayEquals(first, second);
		assertNotEquals(1, 2);
	}

}
