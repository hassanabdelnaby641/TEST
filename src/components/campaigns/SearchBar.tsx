import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultsCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, resultsCount }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search campaigns..."
          className="w-full px-6 py-4 bg-white rounded-full border-2 border-gray-200 
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
            pl-14 pr-6 text-lg transition-all duration-300
            placeholder-gray-400"
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-5 -bottom-8 text-sm text-gray-500"
      >
        {value && (
          <span>
            Found {resultsCount} result{resultsCount !== 1 ? 's' : ''}
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default SearchBar;