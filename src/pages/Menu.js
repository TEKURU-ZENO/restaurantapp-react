import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CategoryFilter from '../components/menu/CategoryFilter';
import MenuSection from '../components/menu/MenuSection';
import ScrollToTop from '../components/common/ScrollToTop';
import { useScrollPosition } from '../hooks/useScrollPosition';
import menuData from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const scrollPosition = useScrollPosition();

  const categories = ['all', ...new Set(menuData.map(item => item.category))];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Savory Delights | Menu';
    if (activeCategory === 'all') {
      setFilteredItems(menuData);
    } else {
      setFilteredItems(menuData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.subcategory]) {
      acc[item.subcategory] = [];
    }
    acc[item.subcategory].push(item);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="menu-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="menu-header"
        variants={itemVariants}
      >
        <div className="container">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">
            Discover culinary excellence with our carefully curated selection of dishes
          </p>
        </div>
      </motion.div>

      <div className="container">
        <motion.div variants={itemVariants}>
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
        </motion.div>

        <div className="menu-sections">
          {Object.keys(groupedItems).map((subcategory, index) => (
            <motion.div 
              key={subcategory} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <MenuSection 
                title={subcategory} 
                items={groupedItems[subcategory]} 
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {scrollPosition > 300 && <ScrollToTop />}
    </motion.div>
  );
};

export default Menu;