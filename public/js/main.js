document.addEventListener("DOMContentLoaded", () => {
  const properties = [
    {
      title: "DTCP Approved Plot in Coimbatore",
      location: "Coimbatore, Tamil Nadu",
      price: "Rs.40 Lakhs per Acker, Negotiable",
      status: "Available",
      description:
        "Premium DTCP approved plots in Coimbatore surrounded by green landscapes.",
      images: [
        "/images/sample-property-1(1).jpg",
        "/images/sample-property-1(2).jpg",
        "/images/sample-property-1(3).jpg",
        "/images/sample-property-1(4).jpg",
        "/images/sample-property-1(5).jpg",
        "/images/sample-property-1(6).jpg",
        "/images/sample-property-1(7).jpg",
        "/images/sample-property-1(8).jpg",
        "/images/sample-property-1(9).jpg",
        "/images/sample-property-1(10).jpg",
        "/images/sample-property-1(11).jpg",
        "/images/sketch-propery-1.png",
      ],
      videos: [
        "/videos/sample-property-1(12).mp4",
        "/videos/sample-property-1(13).mp4",
      ],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3892.3239453281194!2d79.807654!3d12.692267000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQxJzMyLjIiTiA3OcKwNDgnMjcuNiJF!5e0!3m2!1sen!2sau!4v1747872630437!5m2!1sen!2sau",
    },
  ];

  const container = document.querySelector("main");

  const createLightbox = () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = 1000;
    lightbox.style.display = "none";

    const media = document.createElement("div");
    media.id = "lightbox-content";
    lightbox.appendChild(media);

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      media.innerHTML = "";
    });

    document.body.appendChild(lightbox);
    return lightbox;
  };

  const lightbox = createLightbox();

  properties.forEach((property, index) => {
    const section = document.createElement("section");
    section.classList.add("property");

    const propertyLabel = document.createElement("h3");
    propertyLabel.textContent = `Property ${index + 1}`;
    section.appendChild(propertyLabel);

    const gallery = document.createElement("div");
    gallery.classList.add("property-gallery");

    property.images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Image of ${property.title}`;
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightbox.querySelector(
          "#lightbox-content"
        ).innerHTML = `<img src="${src}" style="max-width:90vw; max-height:90vh; border-radius:10px">`;
      });
      gallery.appendChild(img);
    });

    if (property.videos && property.videos.length > 0) {
      property.videos.forEach((src) => {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.style.width = "100%";
        video.style.marginTop = "1em";
        video.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightbox.querySelector(
            "#lightbox-content"
          ).innerHTML = `<video src="${src}" controls autoplay style="max-width:90vw; max-height:90vh; border-radius:10px"></video>`;
        });
        gallery.appendChild(video);
      });
    }

    const heading = document.createElement("h2");
    heading.textContent = property.title;

    const details = document.createElement("div");
    details.innerHTML = `
      <p><strong>Location:</strong> ${property.location}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Status:</strong> ${property.status}</p>
      <p>${property.description}</p>
    `;

    const map = document.createElement("iframe");
    map.src =
      property.mapEmbedUrl ||
      `https://www.google.com/maps?q=${encodeURIComponent(
        property.mapQuery
      )}&output=embed`;
    map.loading = "lazy";

    section.appendChild(gallery);
    section.appendChild(heading);
    section.appendChild(details);
    section.appendChild(map);

    container.insertBefore(section, document.querySelector(".contact"));
  });
});
