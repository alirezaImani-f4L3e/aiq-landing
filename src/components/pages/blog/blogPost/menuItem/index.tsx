import { createStyles } from "antd-style";
import { useState, useEffect } from "react";

const useStyles = createStyles(({ css, responsive }) => ({
  menu: css`
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    color: white;

    ${responsive.mobile} {
      display: none;
    }
  `,

  list: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  item: css`
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 5px;
    transition: all 0.3s ease;
    font-size: 14px;
    opacity: 0.75;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      opacity: 1;
    }
  `,

  activeItem: css`
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 600;
    opacity: 1;
    color: white;
  `,

  category: css`
    color: white;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 20px;
    margin-bottom: 16px;
    display: inline-block;
  `,
}));

const menuItems = [
  { id: "openai-of", title: "OpenAI of چیست؟" },
  { id: "features", title: "ویژگی‌های مدل o1" },
  { id: "limitations", title: "محدودیت‌های OpenAI of" },
  { id: "usage-website", title: "استفاده از طریق وبسایت ChatGPT" },
  { id: "usage-api", title: "استفاده از طریق API" },
  { id: "lobechat", title: "استفاده از OpenAI of در LobeChat" },
  { id: "advantages", title: "مزایای منحصر به فرد LobeChat" },
  { id: "deployment", title: "استقرار نسخه جامعه LobeChat" },
  { id: "conclusion", title: "نتیجه‌گیری" },
];

export function MenuItems() {
  const { styles } = useStyles();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveItem(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.category}>در این صفحه</div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${
              activeItem === item.id ? styles.activeItem : ""
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
