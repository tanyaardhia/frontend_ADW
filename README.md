# DummyJSON User Management

_Fitur Utama:_
- Otentikasi pengguna dengan integrasi API.
- Daftar pengguna dengan kemampuan penyortiran dan pemfilteran.
- Tampilan detail pengguna.
- Menambah dan mengedit formulir pengguna.

_Tech Stack:_
- React.Js
- Next.Js
- Axios
- React-Query, React Hooks Form, Redux

## Instruksi Persiapan

1. **Clone repository:**

   ```bash
   git clone <url_repository>
   cd <name_repository>
   ```

2. **Install dependencies untuk Frontend**

   ```bash
   cd .\client\
   npm install
   ```

3. **Menjalankan Aplikasi**
   ```bash
   npm run dev
   ```

## API Endpoints
- `https://dummyjson.com/users`: Mengambil semua pengguna.
- `https://dummyjson.com/users?sortBy=firstName&order=asc`: Mengambil pengguna yang diurutkan.
- `https://dummyjson.com/users/search?q=john`: Mencari pengguna berdasarkan nama.
- `https://dummyjson.com/user/login`: Mengautentikasi pengguna.
- `https://dummyjson.com/users/add`: Menambahkan pengguna baru.
- `https://dummyjson.com/users/{id}`: Mengambil detail pengguna dan memperbarui data pengguna.

