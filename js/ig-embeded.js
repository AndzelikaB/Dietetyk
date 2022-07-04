var userFeed = new Instafeed({
		get: 'user',
		target: "ig-embeded-container",
    	resolution: 'low_resolution',
      limit: 5,
		accessToken: 'IGQVJYMWk4Ym9rZA0ZAkemhER2oyZAFp4MDB5SXZACWHFhUTJYa3QxV1VVSDNkUS1vckxzZAmNYTy1NekJxelU5RFF6MnhYanZAOVEJTWXV0Yi1wYkJHOE5xcHhQc253Y1RWOXlpLXdEMTltaUVoVC16bkhKaAZDZD'
});
userFeed.run();
