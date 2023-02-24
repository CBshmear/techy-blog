// form handler for comment posting

const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#comment").value.trim();

  let path = window.location.pathname;
  let segments = path.split("/");
  const post_id = segments[segments.length - 1];

  if (description && post_id) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);
