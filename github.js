class Github {
    constructor(){
        this.client_id = '597be0bcd51ed2ac05b2';
        this.client_secret = '2f6028fc582cf507f145d2a9f42ed6cbed599207';
        this.repos_count = 5;
        this.repos_sort = 'create: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return {
          profile,
          repos
      };
        
        return {
            profile: profile
        };
    }
}