import "dotenv/config";

import fetch from "node-fetch";



// POST: 新規ユーザー追加

const addUser = async (username) => {

  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable`;



  const response = await fetch(url, {

    method: "POST",

    headers: {

      "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,

      "Content-Type": "application/json"

    },

    body: JSON.stringify({ username })

  });

};



// UPDATE: ユーザー情報の更新

const updateUser = async (id, newUsername) => {

    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable?id=eq.${id}`;
  
  
  
    const response = await fetch(url, {
  
      method: "PATCH",
  
      headers: {
  
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  
        "Content-Type": "application/json"
  
      },
  
      body: JSON.stringify({ username: newUsername })
  
    });
  
  };
  
  
  
  // DELETE: ユーザー削除

const deleteUser = async (id) => {

    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable?id=eq.${id}`;
  
  
  
    const response = await fetch(url, {
  
      method: "DELETE",
  
      headers: {
  
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
  
      }
  
    });
  
  
  
    console.log(`ユーザーID ${id} を削除しました`);
  
  };
  
  
  
  deleteUser(3)