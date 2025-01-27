import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  StatusBar 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Post {
  id: number;
  user: {
    name: string;
    headline: string;
    profilePic: string;
  };
  content: string;
  likes: number;
  comments: number;
}

const LinkedInHomeScreen: React.FC = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      user: {
        name: 'Jane Doe',
        headline: 'Software Engineer at Tech Corp',
        profilePic: 'https://example.com/jane.jpg'
      },
      content: 'Excited to share my latest project! 🚀',
      likes: 42,
      comments: 7
    },
    {
      id: 2,
      user: {
        name: 'John Smith',
        headline: 'Product Manager',
        profilePic: 'https://example.com/john.jpg'
      },
      content: 'Thinking about the future of AI and innovation...',
      likes: 28,
      comments: 5
    }
  ]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Image 
        source={{ uri: 'https://example.com/profile.jpg' }} 
        style={styles.profileImage} 
      />
      <TouchableOpacity style={styles.searchContainer}>
        <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="message-circle" size={24} color="#0A66C2" />
      </TouchableOpacity>
    </View>
  );

  const renderPostCreateSection = () => (
    <View style={styles.postCreateSection}>
      <View style={styles.postCreateInner}>
        <TouchableOpacity style={styles.postButton}>
          <Feather name="edit-2" size={24} color="#0A66C2" />
          <Text style={styles.postButtonText}>Start a post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPost = (post: Post) => (
    <View key={post.id} style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image 
          source={{ uri: post.user.profilePic }} 
          style={styles.postProfileImage} 
        />
        <View style={styles.postUserInfo}>
          <Text style={styles.postUserName}>{post.user.name}</Text>
          <Text style={styles.postUserHeadline} numberOfLines={1}>
            {post.user.headline}
          </Text>
        </View>
      </View>
      <Text style={styles.postContent}>{post.content}</Text>
      <View style={styles.postInteractionContainer}>
        <TouchableOpacity style={styles.interactionButton}>
          <Feather name="thumbs-up" size={16} color="#666" />
          <Text style={styles.interactionText}>Like ({post.likes})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Feather name="message-circle" size={16} color="#666" />
          <Text style={styles.interactionText}>Comment ({post.comments})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderBottomNav = () => (
    <View style={styles.bottomNav}>
      {[
        { icon: 'home', label: 'Home' },
        { icon: 'users', label: 'Network' },
        { icon: 'briefcase', label: 'Jobs' }
      ].map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem}>
          <Feather name={item.icon as any} size={24} color="#0A66C2" />
          <Text style={styles.navText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {renderHeader()}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {renderPostCreateSection()}
        {posts.map(renderPost)}
      </ScrollView>
      {renderBottomNav()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2EF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF3F8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 12
  },
  searchIcon: {
    marginRight: 8
  },
  searchText: {
    color: '#666',
    fontSize: 15
  },
  postCreateSection: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0'
  },
  postCreateInner: {
    backgroundColor: '#F3F2EF',
    borderRadius: 8
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  postButtonText: {
    color: '#0A66C2',
    marginLeft: 10,
    fontWeight: '600'
  },
  postContainer: {
    backgroundColor: 'white',
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  postProfileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12
  },
  postUserInfo: {
    flex: 1
  },
  postUserName: {
    fontWeight: '600',
    fontSize: 15
  },
  postUserHeadline: {
    color: '#666',
    fontSize: 13
  },
  postContent: {
    marginBottom: 12,
    lineHeight: 20
  },
  postInteractionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    paddingTop: 10
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  interactionText: {
    marginLeft: 6,
    color: '#666'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0'
  },
  navItem: {
    alignItems: 'center'
  },
  navText: {
    fontSize: 12,
    color: '#0A66C2',
    marginTop: 4
  },
  scrollViewContent: {
    paddingBottom: 20
  }
});

export default LinkedInHomeScreen;