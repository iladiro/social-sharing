module SocialStrategyHelper

  def render_title(social_name)
    if social_name == 'linkedin'
      partial 'partials/block/title-field'
    end
  end

  def render_description(social_name)
    if ['twitter', 'pinterest', 'linkedin'].include? social_name
      partial 'partials/block/description-field'
    end
  end

  def render_image(social_name)
    if social_name == 'pinterest'
      partial 'partials/block/image-field'
    end
  end

end
