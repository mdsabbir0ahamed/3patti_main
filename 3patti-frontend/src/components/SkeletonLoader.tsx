interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circle' | 'rectangle';
  width?: string;
  height?: string;
}

export default function SkeletonLoader({ 
  className = '', 
  variant = 'rectangle',
  width = 'w-full',
  height = 'h-4'
}: SkeletonLoaderProps) {
  const baseClasses = 'shimmer bg-gray-300';
  
  const variantClasses = {
    text: 'rounded',
    circle: 'rounded-full',
    rectangle: 'rounded-md'
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${width} ${height} ${className}`}
    />
  );
}