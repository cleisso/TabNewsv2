test("GET to api/v1/status: 200", async () => {
	const response = await fetch("https://g7fzk2nx-3000.brs.devtunnels.ms/api/v1/status");

	expect(response.status).toBe(200);
});