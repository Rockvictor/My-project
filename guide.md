# How to Push Code to GitHub

1. **Create a GitHub repository**
   - Sign in to GitHub.
   - Click **New repository**.
   - Enter a repository name, choose public or private, and create it.

2. **Open the project folder**
   - In your terminal or command prompt, navigate to the project directory:

   ```bash
   cd path/to/your/project
   ```

3. **Initialize Git**

   ```bash
   git init
   ```

4. **Add and commit your files**

   ```bash
   git add .  
   git commit -m "Initial commit" 
   ```

5. **Connect your project to GitHub**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```

6. **Verify the remote**

   ```bash
   git remote -v
   ```

7. **Push the code**

   ```bash
   git branch -M main
   git push -u origin main
   ```

## Updating the repository later (after)

```bash
git add .
git commit -m "Describe your changes"
git push
```

## Troubleshooting

- If GitHub requests authentication, sign in using a browser or configure a personal access token.
- If the remote repository already has files, pull them before pushing:

  ```bash
  git pull origin main --rebase
  git push -u origin main
  ```
